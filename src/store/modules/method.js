const method = {
  firestorePath: "reviews/{articleId}/sections/method",
  firestoreRefType: "doc", // or 'doc'
  moduleName: "method",
  statePropName: "doc",
  namespaced: true, // automatically added
  // sync: {
  //   preventInitialDocInsertion: true // Prevent document from being created if it doesnt exist
  // },

  // this object is your store module (will be added as '/method')
  // you can also add state/getters/mutations/actions

  // default state
  state: {
    doc: {
      picot: {
        populationInclude: [""],
        populationExclude: [""],
        interventionInclude: [""],
        interventionExclude: [""],
        comparatorInclude: [""],
        comparatorExclude: [""],
        population: [],
        intervention: [],
        comparator: [],
        outcomes: [],
        types: [],
        typesInclude: null,
        typesExclude: null
      }
    }
  },
  getters: {},
  mutations: {},
  actions: {}
};

export default method;
