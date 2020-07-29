import Vue from 'vue'
import Vuex from 'vuex'
import testFile from './modules/testFile'

if (process.env.NODE_ENV === "development") {
	Vue.use(Vuex)
}

export default new Vuex.Store({
	modules: {
		testFile
	}
})
