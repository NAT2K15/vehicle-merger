const fs = require('fs');
const chalk = require('chalk')
let vehicleList = []

console.log(chalk.red.bold`
███████╗██╗██╗   ██╗███████╗███╗   ███╗    ██╗   ██╗███████╗██╗  ██╗██╗ ██████╗██╗     ███████╗    ███╗   ███╗███████╗██████╗  ██████╗ ███████╗██████╗ 
██╔════╝██║██║   ██║██╔════╝████╗ ████║    ██║   ██║██╔════╝██║  ██║██║██╔════╝██║     ██╔════╝    ████╗ ████║██╔════╝██╔══██╗██╔════╝ ██╔════╝██╔══██╗
█████╗  ██║██║   ██║█████╗  ██╔████╔██║    ██║   ██║█████╗  ███████║██║██║     ██║     █████╗      ██╔████╔██║█████╗  ██████╔╝██║  ███╗█████╗  ██████╔╝
██╔══╝  ██║╚██╗ ██╔╝██╔══╝  ██║╚██╔╝██║    ╚██╗ ██╔╝██╔══╝  ██╔══██║██║██║     ██║     ██╔══╝      ██║╚██╔╝██║██╔══╝  ██╔══██╗██║   ██║██╔══╝  ██╔══██╗
██║     ██║ ╚████╔╝ ███████╗██║ ╚═╝ ██║     ╚████╔╝ ███████╗██║  ██║██║╚██████╗███████╗███████╗    ██║ ╚═╝ ██║███████╗██║  ██║╚██████╔╝███████╗██║  ██║
╚═╝     ╚═╝  ╚═══╝  ╚══════╝╚═╝     ╚═╝      ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝╚══════╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
Thank you for using this script!
- Created by NAT2K15
- Discord: nat2k15
- Github: https://github.com/nat2k15
- Discord Server: https://discord.gg/RquDVTfDwu
- Website: https://store.nat2k15.xyz\n\n` + chalk.yellow.bold `Starting the script...`)
main()
async function main() {
  console.log(chalk.yellow.bold `Checking for exports folder...`)
  createExport()
  console.log(chalk.green.bold `Finished creating the exports folder...` + chalk.white `Done!`)
  await delay(2000)
  console.log(chalk.yellow.bold `Checking for stream/data folders...`)
  exportStream()
  console.log(chalk.green.bold `Finished exporting all the vehicles into ${__dirname}/exports/` + chalk.white `Done!`)
  await delay(2000)

  console.log(chalk.yellow.bold `Converting vehicleList into a json file...`)
  fs.writeFileSync('exports/spawncodes.json', JSON.stringify(vehicleList))
  console.log(chalk.green.bold `Finished converting vehicleList into a json file...` + chalk.white `Done!`)
  console.log(chalk.red`
  ████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗
  ╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║
     ██║   ███████║███████║██╔██╗ ██║█████╔╝      ╚████╔╝ ██║   ██║██║   ██║
     ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗       ╚██╔╝  ██║   ██║██║   ██║
     ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗       ██║   ╚██████╔╝╚██████╔╝
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝       ╚═╝    ╚═════╝  ╚═════╝ 
    For using out vehicle merger. If you would like to support join our discord.                                                                       
    https://discord.gg/RquDVTfDwu
  `)
  await delay(1000)
  console.log(chalk.red `Exiting...`)
  await delay(3000)
  
}

async function createDir(name) {
  if(!fs.existsSync(`exports/data/${name}`)) {
      console.log(chalk.yellow.bold `Creating exports/data/${name} folder...`)
      fs.mkdirSync(`exports/data/${name}`)
      console.log(chalk.green `Finished exports/data/${name} folder...` + chalk.white `Done!`)
  }
  if(!fs.existsSync(`exports/stream/${name}`)) {
      console.log(chalk.yellow.bold `Creating exports/stream/${name} folder...`)
      fs.mkdirSync(`exports/stream/${name}`)
      console.log(chalk.green `Finished exports/stream/${name} folder...` + chalk.white `Done!`)
  }
}


async function createExport() {
  if(!fs.existsSync('exports')) {
    console.log(chalk.yellow `Creating exports folder...`)
    fs.mkdirSync('exports')
    console.log(chalk.green `Finished exports folder...` + chalk.white `Done!`)
    console.log(chalk.yellow.bold `Creating exports/stream folder...`)
    fs.mkdirSync('exports/stream')
    console.log(chalk.green `Finished exports/stream folder...` + chalk.white `Done!`)
    console.log(chalk.yellow.bold `Creating exports/data folder...`)
    fs.mkdirSync('exports/data')
    console.log(chalk.green `Finished exports/data folder...` + chalk.white `Done!`)
    console.log(chalk.green `Finished exports/fxmanifest.lua file...` + chalk.white `Done!`)
    fs.writeFileSync('exports/fxmanifest.lua', `fx_version 'cerulean'\ngames { 'gta5' }\nfiles {\n'data/**/carcols.meta',\n'data/**/carvariations.meta',\n'data/**/handling.meta',\n'data/**/vehiclelayouts.meta',\n'data/**/vehicles.meta',\n}\ndata_file 'VEHICLE_LAYOUTS_FILE'    'data/**/vehiclelayouts.meta'\ndata_file 'HANDLING_FILE'            'data/**/handling.meta'\ndata_file 'VEHICLE_METADATA_FILE'    'data/**/vehicles.meta'\ndata_file 'CARCOLS_FILE'            'data/**/carcols.meta'\ndata_file 'VEHICLE_VARIATION_FILE'    'data/**/carvariations.meta'`)
  } else {
    fs.rm("exports", { recursive: true, force: true }, (err) => {
      if(err) {
        console.log(chalk.red `Error removing the exports folder. ` + chalk.white `Please remove it manually and try again.\n${err.stack}`)
      }    
    })
    await delay(1000)
    createExport()
  }
}
async function exportStream() {
    console.log(chalk.yellow.bold `Exporting stream and data folder...`);
    try {
      fs.readdirSync('cars').forEach(dir => {
        if (!fs.lstatSync(`cars/${dir}`).isDirectory()) {
          console.log(chalk.red `Error: ${dir} is not a directory!`)
        } else {
          fs.readdirSync(`cars/${dir}`).forEach(async mainroot => {
          await createDir(dir);
          if (!fs.lstatSync(`cars/${dir}/${mainroot}`).isDirectory()) {
            if (mainroot.endsWith('.meta')) {
              try {
                fs.copyFileSync(`cars/${dir}/${mainroot}`, `exports/data/${dir}/${mainroot}`);
                console.log(chalk.green `Exported ${mainroot} to exports/data/${dir}/`);

                if(mainroot === 'vehicles.meta') {
                  console.log(chalk.red.bold `Looking for the vehicle name in cars/${dir}/${mainroot}/vehicles.meta`)
                  let data = fs.readFileSync(`cars/${dir}/${mainroot}`, 'utf8');
                  let modelName = data.match(/<modelName>(.*)<\/modelName>/)[1];
                  console.log(chalk.green.bold `Found the vehicle name: ${modelName}`)
                  vehicleList.push(modelName)
                  console.log(chalk.yellow.bold `Adding the vehicle name to the list...`)
                  console.log(chalk.green.bold `Added the vehicle name to the list!`)
                }
              } catch (error) {
                console.error(chalk.red `Error copying file: ${error.message}`);
              }
            }
          } else {
            if (mainroot === 'stream' || mainroot === 'data') {
              const folderType = mainroot === 'stream' ? 'stream' : 'data';
              console.log(chalk.yellow `Exporting ${folderType} folder ${mainroot}...`);
              try {
                fs.readdirSync(`cars/${dir}/${mainroot}`).forEach(file => {
                  if(file.endsWith('vehicles.meta')) {
                    console.log(chalk.red.bold `Looking for the vehicle name...`)
                    let data = fs.readFileSync(`cars/${dir}/${mainroot}`, 'utf8');
                    let modelName = data.match(/<modelName>(.*)<\/modelName>/)[1];
                    console.log(chalk.green.bold `Found the vehicle name: ${modelName}`)
                    vehicleList.push(modelName)
                    console.log(chalk.yellow.bold `Adding the vehicle name to the list...`)
                    console.log(chalk.green.bold `Added the vehicle name to the list!`)
                  }
                  console.log(chalk.yellow `Copying ${file} to exports/${folderType}/${dir}/`);
                  fs.copyFileSync(`cars/${dir}/${mainroot}/${file}`, `exports/${folderType}/${dir}/${file}`);
                  console.log(chalk.green `Exported ${file} to exports/${folderType}/${dir}/` + chalk.white `Done!`);
                });
              } catch (error) {
                console.error(`Error copying files in ${folderType} folder: ${error.message}`);
              }
            }
          }
        });
        }
      });
    } catch (error) {
      console.error(`Error exporting stream folder: ${error.message}`);
    }
  }
  


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}