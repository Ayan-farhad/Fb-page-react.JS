import dot from '../../assest/dot.svg';
import x from '../../assest/x.svg';

function Topitems(){

    return <div style={{ marginTop: 20 , padding:20 , display:'flex'}}>
    <img  style={{ width: 50 , borderRadius: 50}} src='https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/361578664_1002323721201136_1222505428421872424_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGXfFHbUMjlO6eerAp60rteCXE7RCER214JcTtEIRHbXpjg_s8X2QyaiUOtU-WwEMADuC2muPST5tg5Bw49lXTt&_nc_ohc=F4P-zJkS500AX_i2W9D&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfB0HAOeMNc0BV3uYnUR3aQf90Zu81wXWvmm4ig_yYalag&oe=65995AB2' />
    <h4 style={{color:'gray' , marginLeft:15}}>Khaan Ayan</h4>

    <div style={{marginLeft:320}}> 
      <img  src={dot} style={{marginRight:5}} />
      <img src={x}  />
    </div>
  </div>
}

export default Topitems;