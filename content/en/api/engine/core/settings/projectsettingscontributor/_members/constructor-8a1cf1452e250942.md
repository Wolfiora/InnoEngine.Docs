---
uid: api.8a1cf1452e2509426860b3c63c79d64b62252323e615613aa8e8b7c5c71680de
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsContributor.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Core.Settings.ProjectSettingRecord})"
source: xml
reviewed: 2e6ceb658d7eed8adc2e72f93924ee1e94c53ece16a4ea7a63afb8b645799060
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
