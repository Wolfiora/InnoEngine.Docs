---
uid: api.00ab589085f366669f99c4261fea39366cd6dc370bca463f410be5d12cd5a433
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.AdvanceUnloadVerification(System.Exception@)"
source: xml
reviewed: d2264ca40f620e82b6d445227bd0f1cd8ef87ec6a774935f3f3787ed8e78abc5
title: "AdvanceUnloadVerification"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Advances cooperative unload verification for retired script generations.

**Parameter `failure`:** Receives the retention failure after all verification attempts, otherwise `null`.

**Returns:** `true` when no additional verification frame is required.
