---
uid: api.24c62008362f2c711bc115dee81590f3ad06bd4bac33fd11752ca6dc0e274d1f
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.SetContributors(System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})"
source: xml
reviewed: c6be11c70408413d672db2c4ff1c4abf355e1fbefc8debb84ccc415d58f22386
title: "SetContributors"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Publishes dependency-ordered default contributors for the next current-generation rebuild without constructing setting instances from types that may still be awaiting assembly activation.

**Parameter `contributors`:** Complete dependency-ordered contributor snapshot.
