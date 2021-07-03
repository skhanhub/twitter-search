import { MISSING_PARAMS } from "../../src/constant/error.constant"

const dataMap: any = {
  'users/search.json': [
    {
        "screen_name": "USDAFoodSafety",
        "id": 20436059,
        "name": "USDA Food Safety & Inspection Service"
    },
    {
        "screen_name": "WFP",
        "id": 27830610,
        "name": "World Food Programme"
    },
    {
        "screen_name": "foodandwine",
        "id": 30278532,
        "name": "Food & Wine"
    },
    {
        "screen_name": "foodtank",
        "id": 921759169,
        "name": "FoodTank"
    },
    {
        "screen_name": "Wegmans",
        "id": 66482863,
        "name": "Wegmans Food Markets"
    }
  ],
  'users/show.json': {
    "id": 27830610,
    "name": "World Food Programme",
    "screen_name": "WFP",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1258375991740768256/W-5DIrQT_normal.jpg",
    "followers_count": 1791801,
  },
  'statuses/user_timeline.json': [
      {
          "id": 1322746183513755600,
          "text": "Malnutrition is not just caused by a lack of food. 👇  \n\nThe double burden of undernutrition &amp; obesity/overweight ca… https://t.co/o6cf8kISKJ"
      },
      {
          "id": 1322703653132628000,
          "text": "🚨What would you bring?🚨\n\nNearly 400,000 people have left behind their homes in #CaboDelgado due to violence, many a… https://t.co/XhQbUByk2S"
      },
      {
          "id": 1322670183220154400,
          "text": "Mya Nu went from being unable to keep food on the table to successfully supplying local markets in the Chittagong H… https://t.co/NFzrm7guDF"
      },
      {
          "id": 1322624632550314000,
          "text": "That's the spirit! 👻\n\nHelp us fight hunger this Halloween.🎃 \n\nDownload the @ShareTheMealorg app and feed a child to… https://t.co/WmgL2usijB"
      },
      {
          "id": 1322577824176173000,
          "text": "How much do you know about the #Sahel?\n\nWith its population expected to reach 340 million by 2050, this is a region… https://t.co/BWGhnzGxEp"
      }
  ]
}
export default class Twitter {

  constructor(options: any){};

  get(path: string, query: any){
    return new Promise((resolve, reject)=>{
        if(query){
            resolve(dataMap[path])
        } else {
            reject([ { code: 25, message: MISSING_PARAMS } ])
        }
    })
  };
}