import './main.css';
import Panelnformation from './panelnformation/panelnformation';
import Table from './table/table';

function Main(){
    let  arr = [
        {1:1,2:2,3:3,4:4,5:5},
        {1:1,2:2,3:3,4:4,5:5},
        {1:1,2:2,3:3,4:4,5:5},
        {1:1,2:2,3:3,4:4,5:5},
        {1:1,2:2,3:3,4:4,5:5}
    ]
    let  arr2 = [
        [1,2,3,4,5],
        [1,2,3,4,5],
        [1,2,3,4,5],
        [1,2,3,4,5],
        [1,2,3,4,5]
    ]
    return(
        <div >
            <h1>tlush bot</h1>
            <Panelnformation />
            <Table titles={[1,2,3,4,5]} data={arr2}/>
        </div>
        
    )
}
export default Main