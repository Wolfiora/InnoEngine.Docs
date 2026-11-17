---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ad48a9a1c87244a8ae97742ccddc006569e8939d94cbcb2a888f8107f8f1b8cf
symbol: engine:Inno.Scripting.Api:M:Inno.Scripting.Api.ScriptingApiExportAttribute.#ctor(System.Type,System.String,Inno.Scripting.Api.ScriptingApiScope)
title: ScriptingApiExportAttribute.Constructor
kind: api
owners:
- Inno.Scripting.Api
apiSurface: source-clr
reviewed: 4cb2d1a042d30d22c32312d56cd05374527dda1a306de51d7026cd23f1487e12
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
