---
uid: api.8a1cf1452e2509426860b3c63c79d64b62252323e615613aa8e8b7c5c71680de
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsContributor.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Core.Settings.ProjectSettingRecord})"
source: xml
reviewed: 6d03afb57e4e89f186c017a06310c6fe98722e8553219902b5e225b7077fe50b
title: "Constructor"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates one settings contributor.

**Parameter `id`:** Stable contributor identity.

**Parameter `dependencies`:** Contributors that must precede this contributor.

**Parameter `overrides`:** Dependencies whose defaults may be explicitly replaced.

**Parameter `settings`:** Default setting contributions.
