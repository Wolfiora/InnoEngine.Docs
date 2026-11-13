---
uid: api.520bf2af70a5f9be5d06e58f0d3ada1efee8cba6d1d41bf6bd1a2f2c2bf0e3a7
symbol: "engine:Inno.Runtime:P:Inno.Runtime.RuntimeSessionOptions.contentStore"
source: xml
reviewed: 8fbc15d9c2c82faf6f0576994edaa5aefa90e18c4357f2971380816f10b2a01c
title: "contentStore"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Gets or initializes the immutable content store borrowed for the session lifetime.

## Remarks

Player sessions require this store. Edit and Play sessions may omit it when an authoring asset service is composed by the Editor.
