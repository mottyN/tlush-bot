import React from 'react';
import './table.css';

function Table(props) {
    // super(props);
    return (
        <div>
            <div className='r'>
                <table>
                    <tr>
                        {props.titles.map((i) => {
                            return (<th>{i}</th>)
                        })}
                    </tr>
                    {props.data.map((i) => {
                        return (<tr>
                            {i.map((it) => {
                                return <td>{it}</td>
                            })}
                        </tr>)
                    })}
                </table>
            </div>

        </div>
    )
}
export default Table