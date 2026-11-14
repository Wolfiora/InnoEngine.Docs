---
uid: api.dfe9201feb25a09f76d88c8f8aaf291c1bcd273ff333f5ea5e0ad656aeef79f8
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext)"
source: xml
reviewed: 8305cd39a36ce1112c5264d6fe8825c4509872e08493aa264454cf5ce0577e43
title: "StaticModuleSource.Prepare"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Acquires a validated candidate and transfers its lifetime to the caller on success.

**Parameter `context`:** The immutable candidate dependency closure and retirement owner.

**Returns:** A complete unpublished contribution; failure retires every acquired resource through the context.
