---
uid: api.c032b2bbfa6538b4478ecb7d71c226ffd5d7f5f17394e7ff49b34c079528f4a8
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyPlayerSourcesAsync(Inno.Build.SupportPacks.PlayerSupportPackBuildContext,System.String,System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: 3a183d933dedb8b0eb9b72ffb61233b83b81b492469cf89d9ad00cbdfd6e9db7
title: "CopyPlayerSourcesAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Copies the selected project's evaluated source closure into isolated template input.

**Parameter `context`:** The selected checkout, SDK and preparation lifetime.

**Parameter `project`:** The explicit product project to evaluate.

**Parameter `destination`:** The isolated source input directory.

**Parameter `cancellationToken`:** Cancels evaluation and source preparation.

**Parameter `environment`:** Optional explicitly selected SDK environment.

**Returns:** Completion after all sources have contained, unique publication paths.

**Exception `T:System.IO.InvalidDataException`:** Source paths collide, escape the root, or the closure is empty.
