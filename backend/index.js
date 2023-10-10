const express = require("express");
const { google } = require("googleapis");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});

//Get Info on Players
app.get("/players", async(req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
    
      // Create client instance for aut
      const client = await auth.getClient();
    
      // Instance of Google Sheets API
      const googleSheets = google.sheets({ version: "v4", auth: client });
    
      const spreadsheetId = "1kNZ5NbgjKkNOod6BVQP4DoYGB83Kz7Bfs2ZwqzHICBo";

      // Read rows from spreadsheet
      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "PlayerInf!A:G",
      });
      let data = []
      for(let i = 1; i<await getRows.data.values.length; i++){
        let ndata = {
            photo: getRows.data.values[i][0],
            name: getRows.data.values[i][1],
            phone: getRows.data.values[i][2],
            email: getRows.data.values[i][3],
            batch: getRows.data.values[i][4],
            position: getRows.data.values[i][5],
            team: getRows.data.values[i][6]
        }
        data.push(ndata)
      }
      res.send(data)
});

//Get match details
app.get("/matchdet", async(req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
    
      // Create client instance for aut
      const client = await auth.getClient();
    
      // Instance of Google Sheets API
      const googleSheets = google.sheets({ version: "v4", auth: client });
    
      const spreadsheetId = "1kNZ5NbgjKkNOod6BVQP4DoYGB83Kz7Bfs2ZwqzHICBo";
    
      // Read rows from spreadsheet
      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "MatchF!A:F",
      });
      let data = []
      for(let i = 1; i<await getRows.data.values.length; i++){
        let ndata = {
            matchname: getRows.data.values[i][0],
            teamaname: getRows.data.values[i][1],
            timescore: getRows.data.values[i][2],
            teambname: getRows.data.values[i][3],
            division: getRows.data.values[i][4],
            date: getRows.data.values[i][5],
        }
        data.push(ndata)
      }
      res.send(data)
});

//Get Standings
app.get("/stands", async(req, res) => {
  const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
  
    // Create client instance for aut
    const client = await auth.getClient();
  
    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client });
  
    const spreadsheetId = "1kNZ5NbgjKkNOod6BVQP4DoYGB83Kz7Bfs2ZwqzHICBo";
  
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Standings!A:K",
    });
    let data = []
    for(let i = 1; i<await getRows.data.values.length; i++){
      let ndata = {
          tname: getRows.data.values[i][0],
          group: getRows.data.values[i][1],
          captain: getRows.data.values[i][2],
          played: getRows.data.values[i][3],
          wins: getRows.data.values[i][4],
          draws: getRows.data.values[i][5],
          loss: getRows.data.values[i][6],
          gc: getRows.data.values[i][7],
          ga: getRows.data.values[i][8],
          gd: getRows.data.values[i][9],
          points: getRows.data.values[i][10]
      }
      data.push(ndata)
    }
    res.send(data)
});

//Get Logos
app.get("/logos", async(req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
    
      // Create client instance for aut
      const client = await auth.getClient();
    
      // Instance of Google Sheets API
      const googleSheets = google.sheets({ version: "v4", auth: client });
    
      const spreadsheetId = "1kNZ5NbgjKkNOod6BVQP4DoYGB83Kz7Bfs2ZwqzHICBo";
    
      // Read rows from spreadsheet
      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "LogoF!A:B",
      });
      let data = []
      for(let i = 1; i<await getRows.data.values.length; i++){
        let ndata = {
            tname: getRows.data.values[i][0],
            logo: getRows.data.values[i][1],
        }
        data.push(ndata)
      }
      res.send(data)
});

//Post Player Data to spreadsheet
app.post("/:fname/:phone/:email/:batch/:position", async (req, res) => {
  const {fname, phone, email, batch, position } = req.params;
  

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for aut
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1kNZ5NbgjKkNOod6BVQP4DoYGB83Kz7Bfs2ZwqzHICBo";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Register!A:H",
  });
  let imglink="";
  for( let i=0; i < getRows.data.values.length; i++){
        if(getRows.data.values[i][3]==email){
            imglink = getRows.data.values[i][2]
            break;
        }
  }
  let team="N/A";

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "PlayerInf!A:G",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[imglink, fname, phone, email, batch, position,team]],
    },
  });
  res.send("Success");
});

const port = process.env.PORT || 1337;

app.listen(port, (req, res) => console.log(`Listening on port ${port}`));