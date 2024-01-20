'use client';

import { Calendar, File, Github, Slack } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { PostsPreview } from '@/lib/cms';

import * as Command from './ui/command';

export function CommandK({ labs, projects, tutorials }: PostsPreview) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleProgramClick() {
    window.open(
      'https://drive.google.com/file/d/1HX9lzcZKw40-G_BW3vVKpX51v9rLq4IY/view?usp=sharing',
      '_blank',
    );
  }

  function handleCalendarClick() {
    window.open(
      'https://drive.google.com/file/d/1TwOfE-D5Hf2iXJWndq-3jQcntwqZVOWT/view?usp=sharing',
      '_blank',
    );
  }

  function handleGitHubClick() {
    window.open('https://github.com/cc3-an-ug', '_blank');
  }

  function handleSlackClick() {
    window.open('https://github.com/cc3-an-ug', '_blank');
  }

  function handlePostClick(slug: string) {
    return () => {
      router.push(`/doc/${slug}`);
      setOpen(false);
    };
  }

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }

    function click(e: MouseEvent) {
      e.preventDefault();
      setOpen((open) => !open);
    }

    document.addEventListener('keydown', down);
    document.getElementById('command-k')?.addEventListener('click', click);

    return () => {
      document.removeEventListener('keydown', down);
      document.getElementById('command-k')?.removeEventListener('click', click);
    };
  }, []);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input placeholder="Escribe un comando o busca..." />
      <Command.List>
        <Command.Empty>No hay resultados para la búsqueda</Command.Empty>
        <Command.Group heading="Externo">
          <Command.Item onSelect={handleProgramClick}>
            <File className="mr-2 h-4 w-4" />
            <span>Programa de Curso</span>
          </Command.Item>
          <Command.Item onSelect={handleCalendarClick}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendario 2024</span>
          </Command.Item>
          <Command.Item onSelect={handleGitHubClick}>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </Command.Item>
          <Command.Item onSelect={handleSlackClick}>
            <Slack className="mr-2 h-4 w-4" />
            <span>Slack</span>
          </Command.Item>
        </Command.Group>
        {labs.length > 0 && (
          <>
            <Command.Separator />
            <Command.Group heading="Laboratorios">
              {labs.map((post) => (
                <Command.Item
                  key={post._id}
                  onSelect={handlePostClick(post.slug.current)}
                >
                  <span>{post.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </>
        )}
        {projects.length > 0 && (
          <>
            <Command.Separator />
            <Command.Group heading="Proyectos">
              {projects.map((post) => (
                <Command.Item
                  key={post._id}
                  onSelect={handlePostClick(post.slug.current)}
                >
                  <span>{post.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </>
        )}
        {tutorials.length > 0 && (
          <>
            <Command.Separator />
            <Command.Group heading="Tutoriales">
              {projects.map((post) => (
                <Command.Item
                  key={post._id}
                  onSelect={handlePostClick(post.slug.current)}
                >
                  <span>{post.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </>
        )}
      </Command.List>
    </Command.Dialog>
  );
}
