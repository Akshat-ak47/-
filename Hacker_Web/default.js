
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
let currentDirectory = "home";

app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("!! Welcome To The Hacker's World !!");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("Type 'help' to see the cmds");
  createText(`Current Directory: ~/${currentDirectory}`);

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = " ~/guest";
  span2.textContent = "@user";
  span2.textContent = ` ~/${currentDirectory}`;
  p.appendChild(span2);
  p.appendChild(span3);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

function handleCdCommand(value) {
  const directory = value.substring(3).trim(); // Extract directory from the command
  const validDirectories = ["backdoor", "files", "unknown", "exploit", "crack", "root", "usr", "valt", ".kai", ".ak47"]; // Simulated directories

  if (directory === "/" || directory === "/home" || directory === "~"){
    trueValue(value);
    createText(`Changed directory to: ~/home`);
    currentDirectory = "home";
  }
  else if (validDirectories.includes(directory)) {
    trueValue(value);
    createText(`Changed directory to: ~/${directory}`);
    currentDirectory = directory; // Update the current directory
  } else {
    falseValue(value);
    createText(`Directory not found: ${directory}`);
  }
}
function handleOtherCommands(value){
  if(value === "help"){
    trueValue(value);
    createCode("home", "For homepage ;)");
    createCode("whoami", "Who am i and what do i do.");
    createCode("contact", "Want to contact me?.");
    createCode("ls", "List the files.");
    createCode("view", "To know more about any files.");
    createCode("extract", "To reveal hidden data.");
    createCode("exiftool", "To know about png files.");
    createCode("clear", "Clean the terminal.");
  }
  else if(value=== "home"){
    trueValue(value);
    createText("Click here For Home Page<a href='https://akshat-ak47.github.io/webfolio/' target='_blank'>https://akshat-ak47.github.io/webfolio/</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("I am Akshat !!")
    createText("For more details visit this link <a href='https://akshat-ak47.github.io/webfolio/#about' target='_blank'>https://akshat-ak47.github.io/webfolio/#about</a>")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("For more details visit this link <a href='https://akshat-ak47.github.io/webfolio/#contact' target='_blank'>https://akshat-ak47.github.io/webfolio/#contact</a>") 
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if (value === "ls" && currentDirectory === "home") {
    trueValue(value);
    createText("exploit/");
    createText("files/");
    createText("root/");
    createText("usr/");
  }
  else if (value === "ls" && currentDirectory === "exploit") {
    trueValue(value);
    createText("backdoor/");
    createText("unknown/");
    createText("crack/");
    createText("ReadMe.txt");
  }
  else if (value === "cat ReadMe.txt" && currentDirectory === "exploit") {
    trueValue(value);
    createText("Empty File LOL :)");
  }
  else if (value === "cat") {
    trueValue(value);
    createText("Enter a file name to read ...");
  }
  else if (value === "ls -la" && currentDirectory === "root") {
    trueValue(value);
    createText(".flag.txt");
  }
  else if (value === "ls" && currentDirectory === "crack") {
    trueValue(value);
    createText("hint.txt");
  }
  else if (value === "cat hint.txt" && currentDirectory === "crack") {
    trueValue(value);
    createText("All important things should be encrypted !!");
  }
  else if (value === "ls -la" && (currentDirectory != "crack" || currentDirectory != "root" || currentDirectory != ".kai")) {
    trueValue(value);
    createText("No hidden Files Found !! use 'ls'");
  }
  else if (value === "ls -la" && currentDirectory === "valt") {
    trueValue(value);
    createText(".kai/");
    createText(".ak47/");
    createText(".secret.txt");
    createText("flags.txt");
  }
  else if(value === "cat flags.txt" && currentDirectory === "valt"){
    trueValue(value);
    createText("Second Part of flag is db68117b22dc3c752665814ad63e8422");
  }
  else if(value === "cat .secret.txt" && currentDirectory === "valt"){
    trueValue(value);
    createText("Want a Blow** ? Then heck47 !!");
    createText("Unlock the secrets within the cipher: A piscine guardian shields the hidden depths, where keys swim in a sea of security");
  }
  else if (value === "ls" && currentDirectory === "valt") {
    trueValue(value);
    createText("flags.txt");
  }
  else if (value === "ls" && currentDirectory != "home"){
    trueValue(value);
    createText("Directory Empty");
  }
  else if (value === "view glitch" && currentDirectory === ".kai"){
    trueValue(value);
    createText("The image file is glitch.png");
  }
  else if (value === "view"){
    trueValue(value);
    createText("Enter file name to know more about it ...");
  }
  else if (value === "view .matrix" && currentDirectory === ".kai"){
    trueValue(value);
    createText("The image file is matrix.jpg");
  }
  else if (value === "view hunt" && currentDirectory === ".kai"){
    trueValue(value);
    createText("The image file is hunt.jpeg");
  }
  else if (value === "view skull" && currentDirectory === ".kai"){
    trueValue(value);
    createText("The image file is skull.jfif");
  }
  else if (value === "ls -la" && currentDirectory === ".kai"){
    trueValue(value);
    createText(".matrix");
    createText("skull");
    createText("glitch");
    createText("hunt");
  }
  else if (value === "exiftool glitch" && currentDirectory === ".kai"){
    trueValue(value);
    createText("ExifTool Version Number : 11.16");
    createText("File Name : glitch.png");
    createText("Directory : .");
    createText("File Modification Date/Time : 2020:07:05 14:56:03-05:00");
    createText("File Inode Change Date/Time : 2020:07:05 14:56:03-05:00");
    createText("File Permissions : rw-r--r--");
    createText("File Type : PNG");
    createText("MIME Type : image/png");
    createText("Image Width : 609");
    createText("Image Height : 640");
    createText("Color Type : RGB with Alpha");
    createText("Compression : Deflate/Inflate");
    createText("Interlace : Noninterlaced");
    createText("Background Color : 255 255 255");
    createText("Comment : q|+d!m!p|V THIS IS A HIDDEN DATA");
    createText("Pixels Per Unit X : 2835");
    createText("Pixels Per Unit Y : 2835");
    createText("Modify Date : 2020:07:05 19:56:03");
    createText("Image Size : 609x640");
    createText("Megapixels : 0.390");
  }
  else if (value === "exiftool") {
    trueValue(value);
    createText("Can only be used with .png files");
  }
  else if (value === "ls" && currentDirectory === ".kai"){
    trueValue(value);
    createText("glitch.jpg");
    createText("hunt.jpg");
  }
  else if (value === "extract flag.hck" && currentDirectory === "root") {
    const filename = flag.hck;
    trueValue(value);
    createText(`Unkown password for ${filename}:`);
    createText(`Note: Type < extract File_Name Password > `);
  }
  else if (value === "extract flag.hck q|+d!m!p|V" && currentDirectory === "root") {
    trueValue(value);
    createText("flag.hck contains the following text:");
    createText("ZmxhZ3t5MHVfNHIzXzRfbTQ1NzNyXw==")
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

async function handleSubmitCommand() {
  const flagInput = prompt("Enter the flag:"); // You might want to replace this with your own input method
  const flagRegex = /^flag\{(.+?)\}$/; // Regex to validate flag format

  if (flagRegex.test(flagInput)) {
    const extractedFlag = flagRegex.exec(flagInput)[1];
    // Check if the extractedFlag is the correct flag
    if (extractedFlag === "y0u_4r3_4_m4573r_0f_7h3_m47r1x") {
      trueValue("submit");
      createText("Congratulations! You've submitted the correct flag.");
    } else {
      falseValue("submit");
      createText("Wrong flag. Try again.");
    }
  } else {
    falseValue("submit");
    createText("Please enter the flag in the correct format: flag{your_flag_here}");
  }
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if (value.startsWith("cd ")) {
    await handleCdCommand(value);
  } else if (value === "submit") {
    await handleSubmitCommand();
  } else {
    handleOtherCommands(value);
  }

}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();