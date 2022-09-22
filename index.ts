import * as functions from "firebase-functions/v2"

exports.handleEvent = functions.eventarc.onCustomEventPublished("firebase.extensions.storage-resize-images.v1.complete", (event)=>{
    if (event) {
        console.log(event.source);
        console.log(event.data);
    }
});