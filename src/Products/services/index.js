import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL
export async function getProducts () {
  try {
    const response = await axios({
      url: `${baseUrl}/v1/product`,
      method: 'GET'
    })
    return response
  } catch (e) {
    console.error(e)
  }
}
