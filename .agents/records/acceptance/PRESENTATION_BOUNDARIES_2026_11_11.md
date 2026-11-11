# Rendering and presentation integration boundaries

Three remaining backend-native project entries now have reviewed English integration overviews: BGFX, ImGui and ImGuizmo. They locate engine-facing usage, context/frame borrowing, viewport retirement and module dependency order. They intentionally contain no generated member reference or upstream binding examples, following the user's engine-only documentation scope.

Original baseline page hashes and destinations are in `reference/provenance/presentation-boundaries-migration.json`. The selected implementation files are unchanged from engine 18da08eaecb12d89b816166bae8d9480683f6948. This is a semantic review of the engine boundary, not native execution or source API certification.

Canonical preparation published 858 pages, parsing four changed/new pages and reusing 854. Source and rendered projection passed with no errors. The site has 86 of 252 project entries and 4,834 bound engine declarations; 166 entries remain missing. The production build took 19.19 seconds, including 9.78 seconds of Pagefind indexing. These single observations are not a controlled performance benchmark.

Snapshot: `af30d5c577fe1816f94597b97290111192f588773a65c830763ba833487f2263`.
Content identity: `a180951056b60507cb6bd74f6aca4290a3d6100d010b7d7336eec616077efcdb`.

Evidence is retained under `artifacts/presentation-boundaries-{index.log,source.json,site.log,rendered.json}`. Full visual/browser acceptance, content migration, source certification, CI pairing and actual publication remain incomplete.
