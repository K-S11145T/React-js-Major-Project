export {removetv} from '../reducers/tvSlice'
import axios from '../../utils/axios'
import {loadtv} from '../reducers/tvSlice'

export const asyncloadtvs =  (id)=> async (dispatch , getstate) => {
  try{
    const detail = await axios.get(`tv/${id}`);
    const externalid = await axios.get(`tv/${id}/external_ids`);
    const recommendations = await axios.get(`tv/${id}/recommendations`);
    const similar = await axios.get(`tv/${id}/similar`);
    const translations = await axios.get(`tv/${id}/translations`);
    const videos = await axios.get(`tv/${id}/videos`);
    const watchproviders = await axios.get(`tv/${id}/watch/providers`);

    let theultimate = {
      detail : detail.data ,
      externalid : externalid.data,
      recommendations : recommendations.data.results,
      similar : similar.data.results,
      translations : translations.data.translations.map(t => t.name),
      videos : videos.data.results.find(m => m.type === 'Trailer'),
      watchproviders :  watchproviders.data.results.IN
    }
    dispatch(loadtv(theultimate))
    
    
  }
  catch(e){
    console.log("Error :" , e)
  }

}
