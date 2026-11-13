---
uid: api.7d6e20585e465244ee7d1d5e3b4907229ec2f84f8137b5b9ef492ec25b2c93bd
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.ValidateRename(Inno.Editor.Assets.AssetEditorContext,System.String)"
source: xml
reviewed: 6545c53034ddaabc7ef4023db0095a3320842ef94213d401e1eb59c0c6ceec99
title: "AssetEditingModule.ValidateRename"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates a requested name without modifying the source.

**Parameter `context`:** The immutable metadata captured for this immediate source operation.

**Parameter `newName`:** The requested entry name without its protected file extension.

**Returns:** The committed source identity, or a validation result describing why the operation is unavailable.
