export default function getDarkColor(eventColor){
      switch (eventColor) {
            //BJJ
            case '#0078ff':
                  return(
                        '#a2cdff'
                  )
            //Purple (Aux Classes)
            case '#6e23fb':
                  return(
                        '#bf8dfc'
                  )
            //Orange (Kids)
            case '#E57300':
                  return(
                        '#ffb64c'
                  ) 
            //Special Events
            case '#E20000':
                  return(
                        '#FF5D5D'
                  ) 
            default:
                 return undefined
          }
}    