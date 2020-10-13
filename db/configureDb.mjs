

function writeForeignKey( { hasRel, belongRel, fromModel, toModel , field } ){
    switch(hasRel){

        case 'hasOne':
            fromModel.hasOne(toModel, { ...field} );     
            break;
        case 'hasMany':
            fromModel.hasMany(toModel, { ...field} ); 
            break;
        default:

    } 
    switch(belongRel){

        case 'belongsTo':
            toModel.belongsTo( fromModel );     
            break;
        case 'belongsToMany':
            toModel.belongsToMany( fromModel ); 
            break;
        default:

    } 

    
}



export default function configRelation ( relationship ){

    if (Array.isArray(relationship)) {

    relationship.forEach(  obj=>{ writeForeignKey(obj) }  )
    }else{
        writeForeignKey(relationship)
    }

}

