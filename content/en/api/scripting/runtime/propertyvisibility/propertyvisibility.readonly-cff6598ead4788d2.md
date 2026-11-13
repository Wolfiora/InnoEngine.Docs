---
uid: api.cff6598ead4788d241cc6fc0a69659c4a33ad39f84459f5466cda6ca59c52e41
symbol: "scripting:Inno.Core.Serialization:F:InnoEngine.Serialization.PropertyVisibility.Readonly"
source: xml
reviewed: cd30e2c251237c2a5349901e3c99f2d46e8cec1fb3a8b4c4f37dee65d167de93
title: "PropertyVisibility.Readonly"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Can serialize and deserialize, runtime can get but cannot set. Runtime set attempts should be rejected (see `M:InnoEngine.Serialization.SerializedProperty.SetValue(System.Object)` behavior).
