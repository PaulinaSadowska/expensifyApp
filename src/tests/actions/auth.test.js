import { login, logout } from '../../actions/auth'

test('login with uid', () => {
    const action = login("testUid")
    expect(action).toEqual({
        type: "LOGIN",
        uid: "testUid"
    })
})

test('login with empty uid', () => {
    const action = login("")
    expect(action).toEqual({
        type: "LOGIN",
        uid: ""
    })
})

test('logout', () => {
    const action = logout()
    expect(action).toEqual({
        type: "LOGOUT"
    })
})