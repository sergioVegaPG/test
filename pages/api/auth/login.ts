import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "@/lib/ironSession/withSession";
import jwt_decode from "jwt-decode";
import { tokenPayload, tokenRes } from "@/lib/types/token";
import { auth0User, user } from "@/lib/types/user";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body

    console.log('username y password: ', username, password)
    console.log('LLAMANDO A URL: ', `${process.env.NEXT_PUBLIC_GATEWAY_URL}/Token?username=${username}&password=${password}`)

    const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_GATEWAY_URL}/Token?username=${username}&password=${password}`);

    console.log('TOKEN RES: ', { tokenRes })

    if (!tokenRes.ok) {
        console.log('HA IDO MAL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        return res.status(tokenRes.status).json({
            error: 'Invalid username or password.'
        })
    }

    const tokenData: tokenRes = await tokenRes.json();
    console.log('TOKEN DATA: ', tokenData)

    const decoded = jwt_decode<tokenPayload>(tokenData.access_token);
    console.log('decoded token', decoded)

    const userRes = await fetch(`${process.env.NEXT_PUBLIC_GATEWAY_URL}/Users/${decoded.sub}`, {
        method: 'GET',
        headers: {
            'Authorization': `${tokenData.token_type} ${tokenData.access_token}`,
        }
    });

    if (!userRes.ok)
        return res.status(userRes.status).json({
            error: 'Error getting the user, check your user permissions.'
        })

    const { user_id, email, name, nickname, picture }: auth0User = await userRes.json();

    const user: user = {
        token: tokenData,
        id: user_id,
        email,
        name,
        nickname,
        picture,
        password: undefined,  // Ensure that password is removed
        isLoggedIn: true
    };

    req.session.user = user
    await req.session.save()

    console.log('TODO CORRECTO, DEVOLVIENDO STATUS 200!')

    return res.status(200).send(null);
}