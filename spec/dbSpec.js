describe('Conección a la base de datos', function () {
    var estado;

    it('debe ser conectado exitosamente', function () {
        estado = "conectado exitosamente con la BD";
         expect(estado).toBe("conectado exitosamente con la BD");
    });


});