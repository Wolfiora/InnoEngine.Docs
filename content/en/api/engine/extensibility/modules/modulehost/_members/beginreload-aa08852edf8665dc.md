---
uid: api.aa08852edf8665dcd8c9740beda888078bb44447865f4463628d2805344aac8b
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.IModuleSource},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 7a31f5c2e79c19c970c67e2b8ccd3020b0984e1e054bc4263c695952a1a7fa41
title: "BeginReload"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Stages additions, replacements, and removals as one atomic dependency-ordered transaction.

**Parameter `requests`:** Complete candidate module additions and replacements.

**Parameter `removedModuleNames`:** Active stable module names omitted from the candidate generation.

**Returns:** A session that publishes or rolls back every candidate and removal together.

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.

**Exception `T:System.ArgumentException`:** Thrown when no change is requested, a name is duplicated, or one module is both replaced and removed.
