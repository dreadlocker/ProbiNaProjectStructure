class BaseData {
    constructor(db, ModelClass, validator) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    filterBy(props) {
        return this.collection.find({}).toArray();
    }

    getAll() {
        return this.collection.find({}).toArray();

        // const result = this.collection.find({}).toArray();

        // if (this.ModelClass.toViewModel) {
        //     result
        //         .then((models) => {
        //             return models.map((model) => this.ModelClass.toViewModel(model));
        //         });
        // }

        // return result;
    }

    create(model) {
        if (!this._isModelValid) {
            return Promise.reject("Validation failed");
        }
        return this.collection.insert(model);


        // if (!this._isModelValid(model)) {
        //     return Promise.reject("Invalid model");
        // }

        // return this.collection.insert(model)
        //     .then(() => {
        //         return this.ModelClass.toViewModel(model);
        //     });
    }

    _isModelValid(model) {
        if (typeof this.validator === "undefined" || typeof this.validator !== "function") {
            return true;
        }
        return this.validator.isValid(model);
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + "s";
    }
}

module.exports = BaseData;