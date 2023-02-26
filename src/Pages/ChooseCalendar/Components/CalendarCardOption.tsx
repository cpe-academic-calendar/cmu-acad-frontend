import { useState } from 'react'
import DuplicatePopUp from './DuplicatePopUp'
import styled from 'styled-components'
import axios from 'axios'
import { CalendarPath } from './path'
const CalendarCardOption = (props: any): JSX.Element => {
    const [duplicate, setDuplicate] = useState(false)
    const [deleteCalendar, setDeleteCalendar] = useState(false)
    const [response, setResponse] = useState()
    const [archive,setArchive] = useState(false)

    const handleDuplicate = () => {
        setDuplicate(true)
    }
    console.log(props.item.id)
    const handleArchive = async ()=> {
        await axios.put(`${CalendarPath.archiveCalendar}${props.item.id}`,
            {
                calendar_status: "Archive"
        })
            .then((response) => {
                setResponse(response.data)
                console.log(response.data)
                alert("Archive calendar success")
                window.location.reload();
            })
    }

    const handleRestore = async ()=> {
        await axios.put(`${CalendarPath.archiveCalendar}${props.item.id}`,
            {
                calendar_status: "Active"
        })
            .then((response) => {
                setResponse(response.data)
                console.log(response.data)
                alert("Active calendar success")
                window.location.reload();
            })
    }

    const handleDelete = async () => {
        console.log("delete")
        setDeleteCalendar(true)
        await axios.delete(CalendarPath.delete + props.item.id)
            .then((response) => {
                setResponse(response.data)
                console.log(response.data)
                alert("delete calendar success")
                window.location.reload();
            })
    }

    let render_popup = null

    duplicate ? (
        render_popup = <DuplicatePopUp data={props} open={true} />)
        : (render_popup = null)

    const showAlertDelete = () => {
        return (<div className="w-full md:w-1/3 mx-auto">
            <div className="flex flex-col p-5 rounded-lg shadow bg-white">
                <div className="flex">
                    <div>
                        <svg className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                    </div>

                    <div className="ml-3">
                        <h2 className="font-semibold text-gray-800">Delete Alert Title With Large Action</h2>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit ipsam nam quam! Ab accusamus aperiam distinctio doloribus, praesentium quasi reprehenderit soluta unde?</p>
                    </div>
                </div>

                <div className="flex items-center mt-3">
                    <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                        Cancel
                    </button>

                    <button className="flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                        Delete
                    </button>
                </div>
            </div>
        </div>)
    }
    console.log(deleteCalendar)
    return (<>
        <Modal className='z-20'>
            <DraftOption>
                <div className="hover:bg-gray-200">
                    <button onClick={handleDuplicate}>ทำซ้ำ</button>
                </div>
                <div className="hover:bg-gray-200">
                    <button onClick={() => exportHandle}>นำออก</button>
                </div>
                <div className="hover:bg-gray-200">
<<<<<<< HEAD
                    <button onClick={() => archiveHandle}>จัดเก็บ</button>
=======
                    <button onClick={handleArchive}>จัดเก็บ</button>
>>>>>>> c7c9bfa (feat: set global axios and some fix components)
                </div>
                <div className="hover:bg-gray-200">
                    <button onClick={handleRestore}>กู้คืน</button>
                </div>
                <div className="hover:bg-gray-200">
                    <button className='delete ' onClick={handleDelete}>ลบ</button>
                </div>
            </DraftOption>
        </Modal>
        {render_popup}
    </>);
}

const DraftOption = styled.div`
    align-items: center;
    background-color: var(--background);
    color: #000;
    font-size: medium;
    display: flex;
    flex-direction: column;
    padding: 8px;
    .delete{
        color: var(--error)
    }
    p{
        margin: 2px;
    }
`

const Modal = styled.div`
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 4px;
    padding-bottom: 4px;
    z-index: 999;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`
export default CalendarCardOption;