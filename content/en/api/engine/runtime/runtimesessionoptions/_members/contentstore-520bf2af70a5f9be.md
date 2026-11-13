---
uid: api.520bf2af70a5f9be5d06e58f0d3ada1efee8cba6d1d41bf6bd1a2f2c2bf0e3a7
symbol: "engine:Inno.Runtime:P:Inno.Runtime.RuntimeSessionOptions.contentStore"
source: xml
reviewed: 2e21c28b0a4050b701749c3831a376457337651a4e219e4ffad5de5db892c31e
title: "contentStore"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Gets or initializes the immutable content store borrowed for the session lifetime.

## Remarks

Player sessions require this store. Edit and Play sessions may omit it when an authoring asset service is composed by the Editor.
