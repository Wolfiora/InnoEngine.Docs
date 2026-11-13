---
uid: api.15a49193b99e8bd028551f50fe760812e6d5500bd530c61fa52ec19f0e73c664
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentResult.#ctor(Inno.Build.Managed.ManagedDeploymentId,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: b1fd0b6f8604e56ff4c09d5e182a07fac3208b37e5aa9cfd20cdf02d736f1efd
title: "Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Freezes successful publication evidence without granting ownership of the pipeline's staging root.

**Parameter `deployment`:** The compiler identity that produced this output.

**Parameter `outputDirectory`:** The directory containing the completed managed publication.

**Parameter `sdkIdentity`:** The exact managed SDK selected from the entry project's configuration.

**Parameter `files`:** The nonempty set of relative output file paths, copied before returning to the pipeline.
