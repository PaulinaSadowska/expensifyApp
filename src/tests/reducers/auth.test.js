import authReducer from '../../reducers/auth'

test('should setup without uid', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})
})

test('should login set uid', () => {
    const action = { type: 'LOGIN', uid: "12345" }
    const state = authReducer({}, action)
    expect(state).toEqual({ uid: action.uid });
})

test('should logout remove uid', () => {
    const action = { type: 'LOGOUT' }
    const state = authReducer({ uid: "12345" }, action)
    expect(state).toEqual({});
})
