import  {useState} from 'react'
import styles from './appointment-form.module.css'
function AppointmentForm({doctor, hour, date}) {

const submitFormAndMakeAnAppointment = async function (e) {

e.preventDefault()
await fetch("http://localhost:5000/appointments", {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify({
doctorId: doctor,
name: name, 
phone: phone,
procedure: procedure,
date: date,
startTime: hour,

})
})}

   const [name, setName] = useState('')
    const [procedure, setProcedure] = useState('')
    const [phone, setPhone] = useState('')
    return (
    <div className={styles.form}>
    
    <form>
    <label> Name:
     <input type='text' onChange={(e) => setName(e.target.value
    )} placeholder='please enter your name'></input>
    </label>
   <label> Phone:
    <input type='text' placeholder='Please enter your phone'    onChange={(e) => setPhone(e.target.value)}></input>
    </label>
    <select onChange={(e) => setProcedure(e.target.value)}>
     <option value='none'>Please chose a procedure</option> 
     <option value='Cholecystectomy'>Cholecystectomy</option> 
    
     <option value='Cleft Palate Repair'>Cleft Palate Repair</option> 
     <option value='Colonoscopy'>Colonoscopy</option> 
     <option value='Cryptorchid Neuter'>Cryptorchid Neuter</option> 
     <option value='Cholecystectomy'>CT Scan</option> 
    </select>
       <button type="submit" value="submit" onClick={e => submitFormAndMakeAnAppointment(e)}>Submit</button>
    </form>
   </div>
  )
}

export default AppointmentForm