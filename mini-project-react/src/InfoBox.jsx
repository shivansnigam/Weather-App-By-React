import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1628525805814-cf9fe2582727?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return(
     <div className='InfoBox'>
      <div className='cardcontainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} >
        <div>
          <p>  Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;</p>
            <p>Max Temp = {info.tempMax}&deg;</p>
            <p>The weather feels like = {info.feelsLike}&deg;</p>
        </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}