`import Todo from 'appkit/models/todo'`
context = describe

describe "Todo model", ->
  subject = undefined
  todo = undefined
  dueDate = undefined
  store = undefined

  beforeEach ->
    subject = -> todo().say()
    todo = -> Ember.run(-> store.createRecord(Todo, dueDate: dueDate()))
    dueDate = -> undefined
    store = DS.Store.create(
        adapter: DS.FixtureAdapter.extend()
      )

  context "when due date is set", ->
    it "says lot to do by the date", ->
      dueDate = -> "today"
      expect(subject()).toBe("lot to do by today !")

  context "when due date is not set", ->
    it "just says lot to do", ->
      expect(subject()).toBe("lot to do!")
