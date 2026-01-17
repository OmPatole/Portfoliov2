import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // IMPORTED

const initialFileSystem = {
  name: '~',
  type: 'dir',
  children: {
    'portfolio': {
      type: 'dir',
      children: {
        'about.txt': { type: 'file', content: "Hi, I'm Om Patole.\nI bridge the gap between Full-Stack Development and Cybersecurity.\nCurrently architecting next-gen solutions at Shivaji University." },
        'stack.txt': { type: 'file', content: "LANGUAGES:\n ➜ JavaScript\n ➜ Python\n ➜ Java\n ➜ C++\n ➜ SQL\n\nFRAMEWORKS:\n ➜ React\n ➜ Next.js\n ➜ Node.js\n ➜ Express\n\nSECURITY:\n ➜ Network Security\n ➜ Cryptography\n ➜ Linux/Kali" },
        'projects': {
          type: 'dir',
          children: {
            'xeroguard.md': { type: 'file', content: "# XeroGuard\nDocument privacy solution controlling print permissions & encryption." },
            'captive-portal.md': { type: 'file', content: "# Secure Captive Portal\nEnterprise Wi-Fi management with Ruckus & Google Auth." },
          }
        },
        'contact.txt': { type: 'file', content: "CONTACT DETAILS:\n ➜ Email: ompatole@proton.me\n ➜ GitHub: https://github.com/OmPatole\n ➜ LinkedIn: https://www.linkedin.com/in/om-patole\n ➜ X (Twitter): https://x.com/Om_patole3030" },
        'resume.pdf': { type: 'file', content: "[Opening Resume...]" }
      }
    },
    'README.md': { type: 'file', content: "Welcome to Epnu OS v2.0\nThis is a minimal shell environment." }
  }
};

const bootLines = [
  "Epnu OS BIOS v2.0.4",
  "Checking memory... 32GB OK",
  "Initializing CPU... OK",
  "Loading kernel modules...",
  "Mounting file system... OK",
  "Starting network services... OK",
  "Welcome to Epnu OS."
];

const TUI = () => {
  const navigate = useNavigate(); // HOOK
  const [isBooting, setIsBooting] = useState(true);
  const [bootLog, setBootLog] = useState([]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [fileSystem, setFileSystem] = useState(initialFileSystem);
  const [currentPath, setCurrentPath] = useState(['~']);
  
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tempInput, setTempInput] = useState('');

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    let delay = 0;
    bootLines.forEach((line, index) => {
      delay += Math.random() * 300 + 100;
      setTimeout(() => {
        setBootLog(prev => [...prev, line]);
        if (index === bootLines.length - 1) {
          setTimeout(() => {
             setIsBooting(false);
             setHistory([{ 
                 type: 'output', 
                 data: [
                     "Type <span class='text-[#f9e2af]'>'help'</span> to see available commands."
                 ] 
             }]);
          }, 800);
        }
      }, delay);
    });
  }, []);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [history, bootLog, input]);

  useEffect(() => {
    if (!isBooting) inputRef.current?.focus();
  }, [isBooting, history]);

  const getDir = (pathArray) => {
    let current = fileSystem;
    for (let i = 1; i < pathArray.length; i++) {
      if (current.children && current.children[pathArray[i]]) {
        current = current.children[pathArray[i]];
      } else {
        return null;
      }
    }
    return current;
  };

  const resolvePath = (pathStr) => {
    if (!pathStr) return ['~'];
    if (pathStr === '~') return ['~'];
    if (pathStr === '/') return ['~'];
    
    let parts = pathStr.split('/').filter(p => p);
    let newPath = pathStr.startsWith('/') || pathStr.startsWith('~') ? ['~'] : [...currentPath];
    if (pathStr.startsWith('~') || pathStr.startsWith('/')) parts = pathStr.split('/').filter(p => p && p !== '~');

    for (let part of parts) {
      if (part === '.') continue;
      if (part === '..') {
        if (newPath.length > 1) newPath.pop();
      } else {
        newPath.push(part);
      }
    }
    return newPath;
  };

  const getCurrentPathString = () => currentPath.join('/').replace('~', '~');

  const processLinks = (text) => {
    if (!text) return "";
    const urlRegex = /(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/g;
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

    let processed = text.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline cursor-pointer z-50 pointer-events-auto break-all">${url}</a>`;
    });

    processed = processed.replace(emailRegex, (email) => {
        return `<a href="mailto:${email}" class="text-blue-400 hover:underline cursor-pointer z-50 pointer-events-auto break-all">${email}</a>`;
    });

    return processed;
  };

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commands = history.filter(h => h.type === 'command').map(h => h.text);
      if (commands.length === 0) return;
      const newIndex = historyIndex === -1 ? commands.length - 1 : Math.max(0, historyIndex - 1);
      if (historyIndex === -1) setTempInput(input);
      setHistoryIndex(newIndex);
      setInput(commands[newIndex]);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const commands = history.filter(h => h.type === 'command').map(h => h.text);
      if (historyIndex === -1) return;
      if (historyIndex === commands.length - 1) {
        setHistoryIndex(-1);
        setInput(tempInput);
      } else {
        const newIndex = Math.min(commands.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(commands[newIndex]);
      }
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const args = input.split(' ');
      const currentArg = args[args.length - 1] || "";
      
      let targetDirObj = null;
      let searchPrefix = "";
      let pathPrefix = "";

      if (currentArg.includes('/')) {
         const parts = currentArg.split('/');
         searchPrefix = parts.pop(); 
         const dirPart = parts.join('/'); 
         pathPrefix = dirPart + '/';
         const resolvedPath = resolvePath(dirPart);
         targetDirObj = getDir(resolvedPath);
      } else {
         searchPrefix = currentArg;
         targetDirObj = getDir(currentPath);
      }

      if (targetDirObj && targetDirObj.children) {
          const matches = Object.keys(targetDirObj.children).filter(k => k.startsWith(searchPrefix));
          if (matches.length === 1) {
              const match = matches[0];
              const isDir = targetDirObj.children[match].type === 'dir';
              const completedWord = match + (isDir ? '/' : '');
              args[args.length - 1] = pathPrefix + completedWord;
              setInput(args.join(' '));
          }
      }
      return;
    }

    if (e.key === 'Enter') {
      const cmd = input.trim();
      setHistoryIndex(-1);
      setTempInput('');
      
      const args = cmd.split(' ');
      const command = args[0].toLowerCase();
      
      let output = [];
      let customType = 'output';

      setHistory(prev => [...prev, { 
        type: 'command', 
        path: getCurrentPathString(), 
        text: input 
      }]);

      switch (command) {
        case 'help':
          output = [
            "<span class='text-[#f9e2af]'>Available Commands:</span>",
            "  <span class='text-[#a6e3a1]'>ls</span>       List directory contents",
            "  <span class='text-[#a6e3a1]'>cd</span>       Change directory [dir]",
            "  <span class='text-[#a6e3a1]'>pwd</span>      Print working directory",
            "  <span class='text-[#a6e3a1]'>whoami</span>   Current user",
            "  <span class='text-[#a6e3a1]'>cat</span>      Display file content [file]",
            "  <span class='text-[#a6e3a1]'>date</span>     Show current date/time",
            "  <span class='text-[#a6e3a1]'>clear</span>    Clear terminal",
            "  <span class='text-[#a6e3a1]'>exit</span>     Return to portfolio"
          ];
          break;
        case 'ls':
          const dir = getDir(currentPath);
          if (dir && dir.type === 'dir') {
            const items = Object.keys(dir.children || {}).map(name => {
              const isDir = dir.children[name].type === 'dir';
              return isDir ? `<span class="text-[#89b4fa] font-bold">${name}/</span>` : name;
            });
            output = [items.length > 0 ? items.join('  ') : '(empty)'];
          } else {
            output = [`ls: cannot access '${getCurrentPathString()}': Not a directory`];
          }
          break;
        case 'cd':
          const targetPath = args[1] ? resolvePath(args[1]) : ['~'];
          const targetDir = getDir(targetPath);
          if (targetDir && targetDir.type === 'dir') {
            setCurrentPath(targetPath);
          } else {
            output = [`cd: ${args[1] || ''}: No such file or directory`];
          }
          break;
        case 'cat':
          if (!args[1]) {
            output = ["cat: missing operand"];
          } else {
            const currentDir = getDir(currentPath);
            let fileObj = null;
            let fileName = args[1];

            if (fileName.includes('/')) {
                const parts = fileName.split('/');
                const actualFileName = parts.pop();
                const dirPart = parts.join('/');
                const resolvedDir = getDir(resolvePath(dirPart));
                if (resolvedDir && resolvedDir.children) {
                    fileObj = resolvedDir.children[actualFileName];
                    fileName = actualFileName;
                }
            } else {
                fileObj = currentDir?.children?.[fileName];
            }

            if (fileObj) {
              if (fileObj.type === 'file') {
                if (args[1] === 'resume.pdf' || fileName === 'resume.pdf') {
                    window.open('/src/assets/Resume.pdf', '_blank');
                    output = ["Opened Resume.pdf in new tab."];
                } else {
                    customType = 'file-view';
                    output = { name: fileName, content: fileObj.content };
                }
              } else {
                output = [`cat: ${args[1]}: Is a directory`];
              }
            } else {
              output = [`cat: ${args[1]}: No such file or directory`];
            }
          }
          break;
        case 'pwd':
          output = [getCurrentPathString()];
          break;
        case 'date':
          output = [new Date().toString()];
          break;
        case 'whoami':
          output = ["guest"];
          break;
        case 'clear':
          setHistory([{ type: 'output', data: ["Terminal cleared."] }]);
          setInput('');
          return;
        
        // CHANGED: Redirects to home page
        case 'exit':
        case 'gui':
          navigate('/');
          return;
        
        case '':
          break;
        default:
          output = [`bash: ${command}: command not found. Type 'help' for available commands.`];
      }

      if (output && (Array.isArray(output) ? output.length > 0 : true)) {
        setHistory(prev => [...prev, { type: customType, data: output }]);
      }
      setInput('');
    }
  };

  const FileView = ({ name, content }) => {
    const processedContent = processLinks(content);
    return (
        <fieldset className="border border-[#cdd6f4]/30 rounded-sm p-3 my-4 max-w-full">
            <legend className="px-2 text-[#a6adc8] text-xs font-bold">{name}</legend>
            <div 
                className="whitespace-pre-wrap break-words leading-relaxed text-[#cdd6f4]"
                dangerouslySetInnerHTML={{ __html: processedContent }}
            />
        </fieldset>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#1e1e2e] text-[#cdd6f4] font-mono text-sm md:text-base overflow-hidden p-4 md:p-8"
      onClick={() => inputRef.current?.focus()}
    >
      {isBooting ? (
        <div className="h-full flex flex-col justify-end pb-20">
          {bootLog.map((line, i) => (
            <div key={i} className="text-[#a6e3a1] mb-1">{line}</div>
          ))}
          <motion.div 
            animate={{ opacity: [0, 1] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-5 bg-[#cdd6f4] mt-2"
          />
        </div>
      ) : (
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#45475a] scrollbar-track-transparent">
            <div className="mb-6 text-[#7f849c] select-none">
                <p>Epnu OS [Version 2.0.4]</p>
                <p>(c) 2026 Om Patole Corporation. All rights reserved.</p>
                <br/>
            </div>

            {history.map((entry, i) => (
                <div key={i} className="mb-2">
                    {entry.type === 'command' ? (
                        <div className="flex flex-wrap items-center gap-x-2 mt-4">
                            <span className="text-[#a6e3a1] font-bold">guest@ompatole</span>
                            <span className="text-[#cdd6f4]">:</span>
                            <span className="text-[#89b4fa] font-bold">{entry.path}</span>
                            <span className="text-[#cdd6f4]">$</span>
                            <span className="whitespace-pre-wrap break-all">{entry.text}</span>
                        </div>
                    ) : entry.type === 'file-view' ? (
                        <FileView name={entry.data.name} content={entry.data.content} />
                    ) : (
                        <div className="text-[#cdd6f4] pl-0 opacity-90 leading-relaxed whitespace-pre-wrap break-words">
                            {(entry.data || []).map((line, idx) => (
                                <div key={idx} dangerouslySetInnerHTML={{ __html: line }} />
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div className="flex flex-wrap items-center gap-x-2 mt-4 relative">
                <span className="text-[#a6e3a1] font-bold">guest@ompatole</span>
                <span className="text-[#cdd6f4]">:</span>
                <span className="text-[#89b4fa] font-bold">{getCurrentPathString()}</span>
                <span className="text-[#cdd6f4]">$</span>
                
                <div className="relative flex-1 min-w-[50px]">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                    />
                    <div className="flex pointer-events-none whitespace-pre-wrap break-all">
                        <span>{input}</span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1, ease: "steps(2)" }}
                            className="w-2.5 h-5 bg-[#cdd6f4] ml-0.5 inline-block align-middle"
                        />
                    </div>
                </div>
            </div>
            <div ref={bottomRef} className="pb-10" />
        </div>
      )}
    </div>
  );
};

export default TUI;