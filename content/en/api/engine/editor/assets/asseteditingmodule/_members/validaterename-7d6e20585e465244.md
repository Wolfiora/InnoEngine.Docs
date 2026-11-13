---
uid: api.7d6e20585e465244ee7d1d5e3b4907229ec2f84f8137b5b9ef492ec25b2c93bd
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.ValidateRename(Inno.Editor.Assets.AssetEditorContext,System.String)"
source: xml
reviewed: 84c40d0e1a3fa871e5d8717d99660294ca090b0cd2e50dd2f5a406b67afe2294
title: "ValidateRename"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates a requested name without modifying the source.

**Parameter `context`:** The immutable metadata captured for this immediate source operation.

**Parameter `newName`:** The requested entry name without its protected file extension.

**Returns:** The committed source identity, or a validation result describing why the operation is unavailable.
