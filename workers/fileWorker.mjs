

export function matchFileToMessage( messageLists, fileList )


{


        for (let obj in messageLists){

            if (obj.attachmentFile){
                for (fileObj in fileList ){
                    if ( fileObj.messageId == obj.messageId ){

                        obj['file'] =  fileObj

                    }
                }
            } 
        
        }

    return  messageLists

}



