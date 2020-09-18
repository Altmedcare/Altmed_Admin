import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/media/agus/New Volume1/THEMEFOREST/AVANT/react-avant-admin/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/media/agus/New Volume1/THEMEFOREST/AVANT/react-avant-admin/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/media/agus/New Volume1/THEMEFOREST/AVANT/react-avant-admin/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/media/agus/New Volume1/THEMEFOREST/AVANT/react-avant-admin/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/media/agus/New Volume1/THEMEFOREST/AVANT/react-avant-admin/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/media/agus/New Volume1/THEMEFOREST/AVANT/react-avant-admin/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/media/agus/New Volume1/THEMEFOREST/AVANT/react-avant-admin/src/models/user.js').default) });
