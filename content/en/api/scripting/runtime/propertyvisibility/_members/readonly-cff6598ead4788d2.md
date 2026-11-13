---
uid: api.cff6598ead4788d241cc6fc0a69659c4a33ad39f84459f5466cda6ca59c52e41
symbol: "scripting:Inno.Core.Serialization:F:InnoEngine.Serialization.PropertyVisibility.Readonly"
source: xml
reviewed: e73783cc4860082869e2f51d2cd222f451a05942d5a66beecd00f6c49328f0fb
title: "Readonly"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Can serialize and deserialize, runtime can get but cannot set. Runtime set attempts should be rejected (see `M:InnoEngine.Serialization.SerializedProperty.SetValue(System.Object)` behavior).
