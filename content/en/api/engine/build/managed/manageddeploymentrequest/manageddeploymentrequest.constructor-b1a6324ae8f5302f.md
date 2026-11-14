---
uid: api.b1a6324ae8f5302f05f981e7c54708b64df156b8aa212c29025ad7f4347cc1c7
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentRequest.#ctor(System.String,System.String,System.String,System.String,System.String)"
source: xml
reviewed: 597137e3bd2e4dae7048130ccf992431333ec3cd4088b564d438d6b43921b8c7
title: "ManagedDeploymentRequest.Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Resolves all filesystem locations without starting processes or creating output directories.

## Parameters

**Parameter `projectPath`:** The prepared entry project with explicit code references, generated registrations and native inputs.

**Parameter `runtimeIdentifier`:** The managed toolchain's exact target identifier.

**Parameter `codeInputDirectory`:** The isolated directory containing the frozen code inputs referenced by the entry project.

**Parameter `outputDirectory`:** The empty build-owned staging directory; final installation remains the pipeline's responsibility.

**Parameter `logDirectory`:** The build-owned directory receiving process output and SDK selection evidence.
