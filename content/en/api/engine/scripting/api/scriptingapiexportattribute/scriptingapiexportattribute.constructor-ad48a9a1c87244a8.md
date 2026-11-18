---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ad48a9a1c87244a8ae97742ccddc006569e8939d94cbcb2a888f8107f8f1b8cf
symbol: engine:Inno.Scripting.Api:M:Inno.Scripting.Api.ScriptingApiExportAttribute.#ctor(System.Type,System.String,Inno.Scripting.Api.ScriptingApiScope)
title: ScriptingApiExportAttribute.Constructor
kind: api
owners:
- Inno.Scripting.Api
apiSurface: source-clr
sourceFingerprint: 9dc30edea317ecd38976a91e49a9dafcc8ac1ca9d889caff5abb20f1c2c06d5c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `type`:** The runtime type exposed to scripts.

**Parameter `name`:** The type name presented by the script facade.

**Parameter `scope`:** The script profile that receives the type.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `type` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `name` is empty.
