---
uid: api.dfe9201feb25a09f76d88c8f8aaf291c1bcd273ff333f5ea5e0ad656aeef79f8
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext)"
source: xml
reviewed: 131ca9e3dd4c9c22968f1fc780498dff5e9c3a9edf620a2a9b819cf065d52f87
title: "Prepare"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Acquires a validated candidate and transfers its lifetime to the caller on success.

**Parameter `context`:** The immutable candidate dependency closure and retirement owner.

**Returns:** A complete unpublished contribution; failure retires every acquired resource through the context.
