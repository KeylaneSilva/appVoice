import Controller from "./controller.mjs";
import View from "./view.mjs";
import Media from "./ultil/media.mjs";
import Recorder from "./ultil/recorder.mjs";

const view = new View();
const media = new Media();
const recorder = new Recorder(); 

Controller.initialize({
    view,
    media,
    recorder

})