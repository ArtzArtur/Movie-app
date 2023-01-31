import {ref} from "vue"

export default function useFetch(url){
const data = ref(null)
const error = ref(null)
const loading = ref(false)

loading.value = true

const fetchData = async() => {
  try{
    const resp = await fetch(url)
    if(!resp.ok) {
      error.value = 'Cannot fetch data'
    }
    data.value = await resp.json()
    console.log(data.value.Response)
    if(data.value.Response==="False"){
      throw new Error(data.value.Error)
    }
  } catch(err){
    error.value = err
  }
  loading.value = false
};
return {data,error,loading,fetchData}
}
