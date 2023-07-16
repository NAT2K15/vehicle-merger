const fs = require('fs');
const chalk = require('chalk');

let vehicleList = [];
let logStream;

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
- Website: https://store.nat2k15.xyz\n\n` + chalk.yellow.bold `Starting the script...`);

main();

async function main() {
  console.log(chalk.yellow.bold `Checking for cars folder...`);
  await delay(1000);
  if(await checkCars()) {
    console.log(chalk.green.bold `Found cars folder!` + chalk.white ` Done!`);
  } else {
    console.log(chalk.red.bold `Cars folder was not found but has been created please put vehicles in the cars folder and re run the script.`);
    await delay(3000)
    process.exit(10)
  }
  await delay(2000);
  console.log(chalk.green.bold `Finished checking for cars folder...` + chalk.white `Done!`);

  console.log(chalk.yellow.bold `Checking for exports folder...`);
  await delay(1000);
  createExport();
  await delay(2000);
  log(chalk.green.bold `Finished creating the exports folder...` + chalk.white `Done!`);
  await delay(1000);

  log(chalk.yellow.bold `Checking for stream/data folders...`);
  await delay(1000);
  exportStream();
  log(chalk.green.bold `Finished exporting all the vehicles into ${__dirname}/exports/` + chalk.white `Done!`);
  await delay(2000);

  log(chalk.yellow.bold `Converting vehicleList into a JSON file...`);
  fs.writeFileSync('exports/spawncodes.json', JSON.stringify({ vehicles: vehicleList }, null, 2));
  log(chalk.green.bold `Finished converting vehicleList into a JSON file...` + chalk.white `Done!`);
  
  log(chalk.red(`
  ████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗
  ╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║
     ██║   ███████║███████║██╔██╗ ██║█████╔╝      ╚████╔╝ ██║   ██║██║   ██║
     ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗       ╚██╔╝  ██║   ██║██║   ██║
     ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗       ██║   ╚██████╔╝╚██████╔╝
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝       ╚═╝    ╚═════╝  ╚═════╝ 
    For using our vehicle merger. If you would like to support, join our discord.                                                                       
    https://discord.gg/RquDVTfDwu
  `));
  await delay(1000);

  log(chalk.red(`Exiting...`));
  await delay(3000);
  logStream.end();
}

async function checkCars() {
  if (!fs.existsSync('cars')) {
    console.log(chalk.red.bold `Couldn't find ${'cars'} folder!`);
    console.log(chalk.yellow.bold `Creating ${'cars'} folder...`);
    fs.mkdirSync('cars');
    console.log(chalk.green.bold `Finished creating ${'cars'} folder...` + chalk.white `Done!`);
    return false;
  } 
  return true;
}


async function createExport() {
  if (!fs.existsSync('exports')) {
    logStream = fs.createWriteStream('exports/log.txt');
    log(chalk.yellow `Creating exports folder...`);
    fs.mkdirSync('exports');
    log(chalk.green `Finished exports folder...` + chalk.white `Done!`);

    const exportsStreamFolderPath = 'exports/stream';
    log(chalk.yellow.bold `Creating ${exportsStreamFolderPath} folder...`);
    fs.mkdirSync(exportsStreamFolderPath);
    log(chalk.green `Finished ${exportsStreamFolderPath} folder...` + chalk.white `Done!`);

    const exportsDataFolderPath = 'exports/data';
    log(chalk.yellow.bold `Creating ${exportsDataFolderPath} folder...`);
    fs.mkdirSync(exportsDataFolderPath);
    log(chalk.green `Finished ${exportsDataFolderPath} folder...` + chalk.white `Done!`);

    const fxManifestPath = 'exports/fxmanifest.lua';
    log(chalk.green `Finished ${fxManifestPath} file...` + chalk.white `Done!`);
    fs.writeFileSync(
      fxManifestPath,
      `fx_version 'cerulean'\ngames { 'gta5' }\nfiles {\n\t'data/**/carcols.meta',\n\t'data/**/carvariations.meta',\n\t'data/**/handling.meta',\n\t'data/**/vehiclelayouts.meta',\n\t'data/**/vehicles.meta',\n}\ndata_file 'VEHICLE_LAYOUTS_FILE'    'data/**/vehiclelayouts.meta'\ndata_file 'HANDLING_FILE'            'data/**/handling.meta'\ndata_file 'VEHICLE_METADATA_FILE'    'data/**/vehicles.meta'\ndata_file 'CARCOLS_FILE'            'data/**/carcols.meta'\ndata_file 'VEHICLE_VARIATION_FILE'    'data/**/carvariations.meta'`
    );
  } else {
    fs.rm("exports", { recursive: true, force: true }, (err) => {
      if (err) {
        console.log(chalk.red `Error removing the exports folder. ` + chalk.white `Please remove it manually and try again.\n${err.stack}`)
      }
    });
    await delay(1000);
    createExport();
  }
}

async function createDir(name) {
  const dataFolderPath = `exports/data/${name}`;
  const streamFolderPath = `exports/stream/${name}`;

  if (!fs.existsSync(dataFolderPath)) {
    log(chalk.yellow.bold `Creating ${dataFolderPath} folder...`);
    fs.mkdirSync(dataFolderPath);
    log(chalk.green `Finished ${dataFolderPath} folder...` + chalk.white `Done!`);
  }
  if (!fs.existsSync(streamFolderPath)) {
    log(chalk.yellow.bold `Creating ${streamFolderPath} folder...`);
    fs.mkdirSync(streamFolderPath);
    log(chalk.green `Finished ${streamFolderPath} folder...` + chalk.white `Done!`);
  }
}

async function exportStream() {
  log(chalk.yellow.bold `Exporting stream and data folders...`);

  try {
    fs.readdirSync('cars').forEach(dir => {
      if (!fs.lstatSync(`cars/${dir}`).isDirectory()) {
        log(chalk.red `Error: ${dir} is not a directory!`);
      } else {
        fs.readdirSync(`cars/${dir}`).forEach(async mainroot => {
          await createDir(dir);

          if (!fs.lstatSync(`cars/${dir}/${mainroot}`).isDirectory()) {
            if (mainroot.endsWith('.meta')) {
              try {
                fs.copyFileSync(`cars/${dir}/${mainroot}`, `exports/data/${dir}/${mainroot}`);
                log(chalk.green `Exported ${mainroot} to exports/data/${dir}/`);

                if (mainroot === 'vehicles.meta') {
                  log(chalk.red.bold `Looking for the vehicle name in cars/${dir}/${mainroot}/vehicles.meta`);

                  let data = fs.readFileSync(`cars/${dir}/${mainroot}`, 'utf8');
                  let modelName = data.match(/<modelName>(.*)<\/modelName>/)[1];
                  log(chalk.green.bold `Found the vehicle name: ${modelName}`);

                  vehicleList.push(modelName);
                  log(chalk.yellow.bold `Adding the vehicle name to the list...`);

                  log(chalk.green.bold `Added the vehicle name to the list!`);

                }
              } catch (error) {
                log(chalk.red `Error copying file: ${error.message}`);

              }
            }
          } else {
            if (mainroot === 'stream' || mainroot === 'data') {
              const folderType = mainroot === 'stream' ? 'stream' : 'data';
              log(chalk.yellow `Exporting ${folderType} folder ${mainroot}...`);

              try {
                fs.readdirSync(`cars/${dir}/${mainroot}`).forEach(file => {
                  if (file.endsWith('vehicles.meta')) {
                    log(chalk.red.bold `Looking for the vehicle name...`);

                    let data = fs.readFileSync(`cars/${dir}/${mainroot}`, 'utf8');
                    let modelName = data.match(/<modelName>(.*)<\/modelName>/)[1];
                    log(chalk.green.bold `Found the vehicle name: ${modelName}`);

                    vehicleList.push(modelName);
                    log(chalk.yellow.bold `Adding the vehicle name to the list...`);

                    log(chalk.green.bold `Added the vehicle name to the list!`);

                  }
                  log(chalk.yellow `Copying ${file} to exports/${folderType}/${dir}/`);

                  fs.copyFileSync(`cars/${dir}/${mainroot}/${file}`, `exports/${folderType}/${dir}/${file}`);
                  log(chalk.green `Exported ${file} to exports/${folderType}/${dir}/` + chalk.white `Done!`);
                });
              } catch (error) {
                log(`Error copying files in ${folderType} folder: ${error.message}`);
              }
            }
          }
        });
      }
    });
  } catch (error) {
    log(`Error exporting stream folder: ${error.message}`);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function log(content) {
  console.log(content)
  logStream.write(content + '\n');
}