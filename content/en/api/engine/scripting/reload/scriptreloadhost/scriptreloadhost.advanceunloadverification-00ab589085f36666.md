---
uid: api.00ab589085f366669f99c4261fea39366cd6dc370bca463f410be5d12cd5a433
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.AdvanceUnloadVerification(System.Exception@)"
source: xml
reviewed: d02946b438ea246ee320d19b0ba27899ed104c0161d878c5528ca4b2bd863103
title: "ScriptReloadHost.AdvanceUnloadVerification"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Advances cooperative unload verification for retired script generations.

## Parameters

**Parameter `failure`:** Receives the retention failure after all verification attempts, otherwise `null`.

## Returns

`true` when no additional verification frame is required.
