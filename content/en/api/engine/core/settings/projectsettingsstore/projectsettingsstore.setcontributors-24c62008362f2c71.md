---
uid: api.24c62008362f2c711bc115dee81590f3ad06bd4bac33fd11752ca6dc0e274d1f
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.SetContributors(System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})"
source: xml
reviewed: 1d89ca64d37e886815e7ebeb623db4dc5286a754e805251a614d8d985230eb31
title: "ProjectSettingsStore.SetContributors"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Publishes dependency-ordered default contributors for the next current-generation rebuild without constructing setting instances from types that may still be awaiting assembly activation.

**Parameter `contributors`:** Complete dependency-ordered contributor snapshot.
