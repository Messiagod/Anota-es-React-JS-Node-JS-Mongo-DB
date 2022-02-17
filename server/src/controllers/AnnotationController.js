const Annotations = require('../models/AnnotationData');

module.exports = {
    /* GET ANNOTATIONS */
    async Read(request, response) {
       const annotationList = await Annotations.find();

       return  response.json(annotationList)
    },

    /* CREATE ANNOTATIONS */
    async Create(request, response){
        console.log(request.body);
        const { title, notes, priority} = request.body; /* corpo da requisição vai ter essas 3 informações */
        
        if (!notes || !title){
            return response.status(400).json({ error: "Necessário um título/anotação"})
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        console.log("Anotação criada com sucesso")
        return response.json(annotationCreated);
    },

    /* DELETE ANNOTATIONS */
    async Delete(request, response){
        const { id } = request.params;

        const annotationDeleted = await Annotations.findOneAndDelete({ _id : id});

        if (annotationDeleted) {
            return response.status(200).json(`${id} deletado com sucesso`);
        }
        console.log("nao foi encontrado registro")
        return response.status(401).json({ error: "Não foi encontrado o registro!"});
    } 
}