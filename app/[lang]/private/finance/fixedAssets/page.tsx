import DataGridFixedAssets from "@/components/data grid/DataGridFixedAssets"
import data from '../../../../../components/data grid/data.json'

export default function FixedAssets() {
    return (
        <>
            <div className="text-xl text-secondary-500 mb-3">Accounting/Fixed Assets</div>
            <DataGridFixedAssets data={data} />
        </>

    )
}